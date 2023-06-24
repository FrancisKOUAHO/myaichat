<?php

namespace App\Http\Controllers;

class APIController extends Controller
{
    public function envoyerCleAPI()
    {
        $cleAPI = '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';
        return response()->json(['cleAPI' => $cleAPI]);
    }
}
