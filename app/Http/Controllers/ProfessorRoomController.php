<?php

namespace App\Http\Controllers;

use App\Models\Professor;
use App\Models\ProfessorRoom;
use App\Models\Room;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProfessorRoomController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $professors = Professor::all();
        $rooms = Room::all();

        $classes = ProfessorRoom::all();

        return Inertia::render('ClassesPage', [
            'professors' => $professors,
            'rooms' => $rooms,
            'classes' => $classes,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $professor = Professor::where('name', $request->professor)->first();
        $room = Room::where('name', $request->room)->first();

        dd($room->id);
    }

    /**
     * Display the specified resource.
     */
    public function show(ProfessorRoom $professorRoom)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ProfessorRoom $professorRoom)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ProfessorRoom $professorRoom)
    {
        //
    }
}
