<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class IndexController extends Controller
{
    /**
     * use to install app for shop
     */
    public function home(Request $request)
    {
        $shop = Auth::user();
        return Redirect::to('https://backend.test/?s=1&host='.$request->host);
    }
}