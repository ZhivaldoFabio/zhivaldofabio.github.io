<?php
// Controllers\UserController.php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    // Get all users
    public function index()
    {
        return response()->json(User::all(), 200);
    }

    // Get one user by ID
    public function show($id)
    {
        $user = User::findOrFail($id);

        return response()->json($user, 200);
    }

    // Store new user
    public function store(Request $request)
    {

        if (!$request->user()->isAdmin()) {
            return response()->json(['error' => 'Forbidden - Admins only'], 403);
        }

        // Validate input
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:6',
            'role_id' => 'required|integer',
        ]);

        // Create user
        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => $validated['password'],
            'role_id' => $validated['role_id'],
        ]);

        return response()->json($user, 201);
    }

    // Update an existing user
    public function update(Request $request, $id)
    {

        if (!$request->user()->isAdmin()) {
            return response()->json(['error' => 'Forbidden - Admins only'], 403);
        }

        $user = User::findOrFail($id);

        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'email' => 'sometimes|email|unique:users,email,' . $id,
            'password' => 'sometimes|string|min:6',
            'role_id' => 'sometimes|integer',
        ]);


        $user->update($validated);

        return response()->json($user, 200);
    }

    // Delete a user
    public function destroy(Request $request, $id)
    {

        if (!$request->user()->isAdmin()) {
            return response()->json(['error' => 'Forbidden - Admins only'], 403);
        }

        $user = User::findOrFail($id);

        $user->delete();

        return response()->json(['message' => 'User deleted successfully'], 200);
    }

}
