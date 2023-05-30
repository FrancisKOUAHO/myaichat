<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;


use App\Http\Controllers\Controller;

class PostController extends Controller
{
    public function index(): JsonResponse
    {
        $posts = Post::all();
        return response()->json($posts);
    }

    public function store(Request $request): JsonResponse
    {
        $validatedData = $request->validate([
            'title' => 'required',
            'content' => 'required',
            'user_id' => 'required|exists:users,id',
        ]);

        $post = Post::create($validatedData);

        return response()->json($post, 201);
    }

    public function show($id): JsonResponse
    {
        $post = Post::findOrFail($id);
        return response()->json($post);
    }

    public function update(Request $request, $id): JsonResponse
    {
        $validatedData = $request->validate([
            'title' => 'required',
            'content' => 'required',
            'user_id' => 'required|exists:users,id',
        ]);

        $post = Post::findOrFail($id);
        $post->update($validatedData);

        return response()->json($post);
    }

    public function destroy($id): JsonResponse
    {
        $post = Post::findOrFail($id);
        $post->delete();

        return response()->json(null, 204);
    }

    public function getUserPosts($userId): JsonResponse
    {
        $user = User::findOrFail($userId);
        $posts = $user->posts;

        return response()->json($posts);
    }
}
