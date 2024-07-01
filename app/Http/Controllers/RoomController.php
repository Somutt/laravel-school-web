<?php

namespace App\Http\Controllers;

use App\Models\Room;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class RoomController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $rooms = Room::all();

        return Inertia::render('RoomPage', [
            'rooms' => $rooms,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|between:2,30|unique:rooms,name',
            'capacity' => 'required|integer|min:1',
        ]);

        Room::create([
            'name' => ucwords($validated['name']),
            'capacity' => $validated['capacity'],
        ]);

        return redirect(route('rooms.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Room $room)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Room $room): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|between:2,30',
            'capacity' => 'required|integer|min:1',
        ]);

        $room->update([
            'name' => ucfirst($validated['name']),
            'capacity'=> $validated['capacity'],
        ]);

        return redirect(route('rooms.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Room $room): RedirectResponse
    {
        $room->delete();

        return redirect(route('rooms.index'));
    }
}
