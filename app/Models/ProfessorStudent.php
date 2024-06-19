<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ProfessorStudent extends Model
{
    use HasFactory;

    protected $fillable = ['professor_id', 'student_id', 'room_id'];

    public function rooms(): HasMany {
        return $this->hasMany(Room::class);
    }

    public function students(): HasMany {
        return $this->hasMany(Student::class);
    }

    public function professors(): HasMany {
        return $this->hasMany(Professor::class);
    }
}
