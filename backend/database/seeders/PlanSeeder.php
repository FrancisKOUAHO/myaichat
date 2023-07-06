<?php

namespace Database\Seeders;

use App\Models\Plan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        $plans = [
            [
                'name'=>'Starter',
                'price'=> 39,
                'interval'=>'month',
                'trial_period_days'=> 7,
                'lookup_key'=>'Starter',
                'st_plan_id'=>'price_1NQWl9FdQvV9SdYXccsEVLV9'
            ],
            [
                'name'=>'Growth',
                'price'=> 79,
                'interval'=>'month',
                'trial_period_days'=> 7,
                'lookup_key'=>'Growth',
                'st_plan_id'=>'price_1NQWnDFdQvV9SdYXPhX9GnCW'
            ],
            [
                'name'=>'Pro',
                'price'=> 99,
                'interval'=>'month',
                'trial_period_days'=> 7,
                'lookup_key'=>'Pro',
                'st_plan_id'=>'price_1NQWmVFdQvV9SdYXhF7oPphl'
            ],
            [
                'name'=>'Starter',
                'price'=> 348,
                'interval'=>'year',
                'trial_period_days'=> 7,
                'lookup_key'=>'Starter',
                'st_plan_id'=>'price_1NQzfQFdQvV9SdYXpDBY8Wtl'
            ],
            [
                'name'=>'Growth',
                'price'=> 708,
                'interval'=>'year',
                'trial_period_days'=> 7,
                'lookup_key'=>'Growth',
                'st_plan_id'=>'price_1NQzkaFdQvV9SdYXYlbRbGyK'
            ],
            [
                'name'=>'Pro',
                'price'=> 828,
                'interval'=>'year',
                'trial_period_days'=> 7,
                'lookup_key'=>'Pro',
                'st_plan_id'=>'price_1NQzjVFdQvV9SdYXU9CMdM79'
            ],
        ];

        foreach ($plans as $plan) {
            Plan::create($plan);
        }
    }
}
