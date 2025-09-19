<?php
// database\seeders\UserSeeder.php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    public function run()
    {
        // Create 1 admin manually
        if (!User::where('email', 'admin@example.com')->exists()) {
            User::create([
                'name' => 'Admin',
                'email' => 'admin@example.com',
                'password' => 'admin123', // will be hashed automatically
                'role_id' => 1,
            ]);


        }
        
        // Create 10 fake users via factory
        User::factory()->count(10)->create();
    }
}