<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Message;

class Messages extends Controller
{
    // REST API : CRUD - create, read, update, delete

    function showAll(){
        return Message::all();
    }
    function show($id) {
        return Message::find($id);
    }

    function create(Request $request){
        $message = new Message();

        $message->username = $request->username;
        $message->message = $request->message;

        $success = $message->save();

        return ["success" => $success];
    }

    public function activeUsers($recent = 30) {
        $recent = (int) $recent;
        return Mesage::where('updated_at', '>', date('c', \strtotime($recent . 'minutes ago')))
                ->select('username')
                ->distinct()
                ->get();
    }
}
