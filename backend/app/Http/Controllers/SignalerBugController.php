<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class SignalerBugController extends Controller
{
    public function SendBugEmail(Request $request)
    {
        $content = $request->input('message');
        $email = $request->input('email');
        $image = $request->image;
        $name = time().'.'.$image->getClientOriginalExtension();
        $path = public_path('upload');
        $image->move($path, $name);
        $url = 'https://api.myaichat.io/upload/'. $name;

$message = 'Voici le message : ' . $content . ' de ' . $email . ' et son image <a href="' . $url . '">Cliquez ici</a>';
        // Envoi de l'email
        Mail::raw($message, function ($message) {
            $message->to('contact@myaichat.io')
                ->subject('Rapport de bug');
        });
    }
}
