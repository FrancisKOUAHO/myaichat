<?php

namespace App\Http\Controllers;

class APIController extends Controller
{
    public function envoyerCleAPI()
    {
        $cleAPI = 'qMQPsCk4m1rp24QXQfseT3BlbkFJm65u0wjrVoF44BHcIo1d';
        return response()->json(['cleAPI' => $cleAPI]);
    }
}
