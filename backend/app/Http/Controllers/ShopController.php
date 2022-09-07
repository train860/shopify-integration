<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ShopController extends Controller
{
    /**
     * fetch the shop information by shopify api
     */
    public function detail()
    {
        
        $shop = Auth::user();

        $shopApi = $shop->api();
   
        $shopInfo = $shopApi->rest('GET', '/admin/shop.json')['body']['shop'];
       
        return $shopInfo;
    }
}