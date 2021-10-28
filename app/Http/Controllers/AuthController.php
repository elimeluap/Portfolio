<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Enregistrement d'un utilisateur
     *
     * @param   Request  $request
     *
     * @return  json
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|string|confirmed'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status_code' => 400,
                'message' => 'Bad request'
            ]);
        }

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->save();

        return response()->json([
            'status_code' => 200,
            'message' => 'User created successfully!'
        ]);
    }

    /**
     * Connexion d'un utilisateur
     *
     * @param   Request  $request
     *
     * @return  json
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string',
            'password' => 'required|string'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status_code' => 400,
                'message' => 'Bad request'
            ]);
        }

        $credentials = request(['email', 'password']);

        if (!Auth::attempt($credentials)) {
            return response()->json([
                'status_code' => 500,
                'message' => 'Unauthorized'
            ]);
        }

        $user = User::where('email', $request->email)->first();

        $tokenResult = $user->createToken('authToken')->plainTextToken;

        return response()->json([
            'status_code' => 200,
            'message' => 'Token created successfully!',
            'token' => $tokenResult,
            'user' => $user
        ]);
    }

    /**
     * Déconnexion d'un utilisateur
     *
     * @param   Request  $request
     *
     * @return  json
     */
    public function logout(Request $request)
    {
        Auth::user()->tokens()->delete();

        return response()->json([
            'status_code' => 200,
            'message' => 'Token deleted successfully!'
        ]);
    }
}
