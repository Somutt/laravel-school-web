<?php

namespace App\Http\Controllers;

use App\Models\Classroom;
use App\Models\Professor;
use App\Models\Room;
use App\Models\Student;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ClassroomController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $professors =  Professor::all();
        $rooms = Room::all();

        $classes = Classroom::with('professor:id,name', 'room:id,name')->get();

        return Inertia::render('ClassesPage', [
            'professors' => $professors,
            'rooms' => $rooms,
            'classes' => $classes,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'professor' => 'required|exists:professors,name',
            'room' => 'required|exists:rooms,name',
            'code' => 'required|string|size:5|regex:/^[A-Za-z0-9]+$/|unique:classrooms,code',
        ]);

        $professor_id = Professor::where('name', $request->professor)->first()->id;
        $room_id = Room::where('name', $request->room)->first()->id;

        Classroom::create([
            'code' => strtolower($request->code),
            'professor_id' => $professor_id,
            'room_id' => $room_id,
        ]);

        return redirect(route('classrooms.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Classroom $classroom): Response
    {
        $complete_classroom = Classroom::where('code', $classroom->code)->with('professor:id,name', 'room:id,name', 'students')->first();

        $professors = Professor::all();
        $rooms = Room::all();
        $students = Student::all();

        return Inertia::render('ClassPage', [
            'classroom'=> $complete_classroom,
            'professors' => $professors,
            'rooms' => $rooms,
            'students' => $students,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Classroom $classroom): RedirectResponse
    {
        $request->validate([
            'professor' => 'required|exists:professors,name',
            'room' => 'required|exists:rooms,name',
        ]);

        $professor_id = Professor::where('name', $request->professor)->first()->id;
        $room_id = Room::where('name', $request->room)->first()->id;

        $classroom->update([
            'professor_id' => $professor_id,
            'room_id' => $room_id,
        ]);

        return redirect(route('classrooms.show', $classroom->code));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Classroom $classroom): RedirectResponse
    {
        $classroom->delete();

        return redirect(route('classrooms.index'));
    }
}
