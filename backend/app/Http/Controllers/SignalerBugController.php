<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\move;

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
        $url = 'http://127.0.0.1:8000/upload/'. $name;

$message = 'Voici le message : ' . $content . ' de ' . $email . ' et  son image <a href="' . $url . '">Cliquez ici</a>';
        // Envoi de l'email
        Mail::raw($message, function ($message) {
            $message->to('kouahofrancis@gmail.com')
                ->subject('Rapport de bug');
        });
    }
}
