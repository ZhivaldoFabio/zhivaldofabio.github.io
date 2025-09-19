<?php
// Models\User.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{

    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'users'; // optional, default is already "users"

    protected $fillable = [
        'name',
        'email',
        'password',
        'role_id',
    ];


    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    // Password mutator to hash password automatically
    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = bcrypt($value);
    }

    //Roles
    public function isAdmin()
    {
        return $this->role_id === 1;
    }

    public function isCashier()
    {
        return $this->role_id === 2;
    }

    public function isCustomer()
    {
        return $this->role_id === 3;
    }



}