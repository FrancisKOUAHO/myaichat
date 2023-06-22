<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class APIController extends Controller
{
    public function envoyerCleAPI(Request $request)
    {
        $cleAPI = 'qMQPsCk4m1rp24QXQfseT3BlbkFJm65u0wjrVoF44BHcIo1d';
        return response()->json(['cleAPI' => $cleAPI]);
    }
}
