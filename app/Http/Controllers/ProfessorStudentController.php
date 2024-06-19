<?php

namespace App\Http\Controllers;

use App\Models\Professor;
use App\Models\ProfessorStudent;
use App\Models\Room;
use App\Models\Student;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProfessorStudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $professors = Professor::all();
        $students = Student::all();
        $rooms = Room::all();

        $classes = ProfessorStudent::all();

        return Inertia::render('ClassesPage', [
            'professors' => $professors,
            'students' => $students,
            'rooms' => $rooms,
            'classes' => $classes,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(ProfessorStudent $professorStudent)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ProfessorStudent $professorStudent)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ProfessorStudent $professorStudent)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ProfessorStudent $professorStudent)
    {
        //
    }
}
