<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProfessorStudent extends Model
{
    use HasFactory;

    protected $fillable = ['professor_id', 'student_id', 'room_id'];
}
