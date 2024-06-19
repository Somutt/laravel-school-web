<?php

use App\Http\Controllers\ProfessorController;
use App\Http\Controllers\ProfessorRoomController;
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

Route::resource('/classes', ProfessorRoomController::class)
    ->middleware('auth');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
