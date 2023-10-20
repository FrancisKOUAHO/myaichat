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

    // production

    /*public function run(): void
    {
        $plans = [
            [
                'name'=>'Starter',
                'price'=> 49,
                'interval'=>'month',
                'trial_period_days'=> 7,
                'allowed_responses'=> 500,
                'lookup_key'=>'Starter',
                'st_plan_id'=>'price_1O3FqVFdQvV9SdYXGMhD2QXi'
            ],
            [
                'name'=>'Growth',
                'price'=> 129,
                'interval'=>'month',
                'trial_period_days'=> 7,
                'allowed_responses'=> 1500,
                'lookup_key'=>'Growth',
                'st_plan_id'=>'price_1O3Fs0FdQvV9SdYXqw3M0TFk'
            ],
            [
                'name'=>'Pro',
                'price'=> 249,
                'interval'=>'month',
                'trial_period_days'=> 7,
                'allowed_responses'=> 3000,
                'lookup_key'=>'Pro',
                'st_plan_id'=>'price_1O3FsoFdQvV9SdYXMqHun3bC'
            ],
            [
                'name'=>'Scale',
                'price'=> 499,
                'interval'=>'month',
                'trial_period_days'=> 7,
                'allowed_responses'=> 36000,
                'lookup_key'=>'Scale',
                'st_plan_id'=>'price_1O3FggFdQvV9SdYXelfOpEZI'
            ],

        ];

        foreach ($plans as $plan) {
            Plan::create($plan);
        }
    }*/

    // development
    public function run(): void
    {
        $plans = [
            [
                'name'=>'Starter',
                'price'=> 49,
                'interval'=>'month',
                'trial_period_days'=> 7,
                'allowed_responses'=> 500,
                'lookup_key'=>'Starter',
                'st_plan_id'=>'price_1O3Fw1FdQvV9SdYXFdQRKbPE'
            ],
            [
                'name'=>'Growth',
                'price'=> 129,
                'interval'=>'month',
                'trial_period_days'=> 7,
                'allowed_responses'=> 1500,
                'lookup_key'=>'Growth',
                'st_plan_id'=>'price_1O3Fx9FdQvV9SdYX6bvlT2PE'
            ],
            [
                'name'=>'Pro',
                'price'=> 249,
                'interval'=>'month',
                'trial_period_days'=> 7,
                'allowed_responses'=> 3000,
                'lookup_key'=>'Pro',
                'st_plan_id'=>'price_1O3FyXFdQvV9SdYX2UXL5Mrw'
            ],
            [
                'name'=>'Scale',
                'price'=> 499,
                'interval'=>'month',
                'trial_period_days'=> 7,
                'allowed_responses'=> 36000,
                'lookup_key'=>'Scale',
                'st_plan_id'=>'price_1O3FfmFdQvV9SdYXG0ZVpNNd'
            ],
        ];

        foreach ($plans as $plan) {
            Plan::create($plan);
        }
    }
}
