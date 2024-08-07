<?php

use App\Http\Controllers\ClassroomController;
use App\Http\Controllers\ClassroomStudentController;
use App\Http\Controllers\ProfessorController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\StudentController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->middleware('auth')->name('dashboard');

Route::get('/add', function () {
    return Inertia::render('AddManage');
})->middleware('auth')->name('add');

Route::resource('/professors', ProfessorController::class)
    ->middleware('auth')
    ->only(['index', 'store', 'destroy', 'update']);

Route::resource('/students', StudentController::class)
    ->middleware('auth')
    ->only(['index', 'store', 'destroy', 'update']);

Route::resource('/rooms', RoomController::class)
    ->middleware('auth')
    ->only(['index', 'store', 'destroy', 'update']);

Route::resource('/classrooms', ClassroomController::class)
    ->middleware('auth')
    ->only(['index', 'store', 'destroy', 'update']);

Route::get('/classrooms/{classroom:code}', [ClassroomController::class, 'show'])
    ->middleware('auth')
    ->name('classrooms.show');

Route::resource('/classroom_student', ClassroomStudentController::class)
    ->middleware('auth')
    ->only(['store']);

Route::delete('/classroom_student/{student}/{classroom}', [ClassroomStudentController::class, 'destroy'])
    ->middleware('auth')
    ->name('classroom_student.destroy');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
