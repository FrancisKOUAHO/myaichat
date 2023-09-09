<?php

namespace App\Http\Controllers;

use App\Models\ShopifyStore;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\Message;

class MessageController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'url' => 'required|string',
            'messages_json' => 'required|json',
        ]);

        $existingMessage = Message::where('url', $request->input('url'))->first();

        if ($existingMessage) {
            // Ajouter les nouveaux messages à l'ancienne entrée
            $existingMessages = json_decode($existingMessage->messages_json, true);
            $newMessages = json_decode($request->input('messages_json'), true);

            // Fusionner les messages existants avec les nouveaux messages
            $mergedMessages = array_merge($existingMessages, $newMessages);

            // Mettre à jour le champ 'messages_json' de l'entrée existante avec les messages fusionnés
            $existingMessage->messages_json = json_encode($mergedMessages);
            $existingMessage->increment('message_count');
            $existingMessage->save();
        } else {
            // Créer une nouvelle entrée s'il n'existe pas d'entrée avec cette URL
            $message = new Message([
                'url' => $request->input('url'),
                'messages_json' => $request->input('messages_json'),
                'message_count' => 1,
            ]);

            $message->save();
        }

        return response()->json(['message' => 'Message enregistré avec succès'], 201);
    }

    public function getMessageCount($url): JsonResponse
    {
        $shopifyStore = ShopifyStore::where('url', $url)->first();

        if (!$shopifyStore) {
            return response()->json(['error' => 'Boutique non trouvée'], 404);
        }

        $user = $shopifyStore->user;

        if (!$user) {
            return response()->json(['error' => 'Utilisateur non trouvé'], 404);
        }

        $allowedResponses = $user->plan->allowed_responses;
        $messageCount = Message::where('url', $url)->sum('message_count');

        $canSendMessage = ($allowedResponses === null) || ($messageCount < $allowedResponses);

        return response()->json([
            'message_count' => $messageCount,
            'allowed_responses' => $allowedResponses,
            'can_send_message' => $canSendMessage,
        ]);
    }



}
