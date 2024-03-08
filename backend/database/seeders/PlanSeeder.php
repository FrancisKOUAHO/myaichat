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
                'st_plan_id'=>'price_1Os22eIpkptxAK2agbw0PwPZ'
            ],
            [
                'name'=>'Growth',
                'price'=> 129,
                'interval'=>'month',
                'trial_period_days'=> 7,
                'allowed_responses'=> 1500,
                'lookup_key'=>'Growth',
                'st_plan_id'=>'price_1OqE2VIpkptxAK2aWaTSjOe4'
            ],
            [
                'name'=>'Pro',
                'price'=> 249,
                'interval'=>'month',
                'trial_period_days'=> 7,
                'allowed_responses'=> 3000,
                'lookup_key'=>'Pro',
                'st_plan_id'=>'price_1OqE2ZIpkptxAK2aMNf4uf63'
            ],
            [
                'name'=>'Scale',
                'price'=> 499,
                'interval'=>'month',
                'trial_period_days'=> 7,
                'allowed_responses'=> 36000,
                'lookup_key'=>'Scale',
                'st_plan_id'=>'price_1OqE2cIpkptxAK2aMwsD918n'
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
                'st_plan_id'=>'price_1Os22CIpkptxAK2aPgGU6nBb'
            ],
            [
                'name'=>'Growth',
                'price'=> 129,
                'interval'=>'month',
                'trial_period_days'=> 7,
                'allowed_responses'=> 1500,
                'lookup_key'=>'Growth',
                'st_plan_id'=>'price_1OqDcdIpkptxAK2apVHont4i'
            ],
            [
                'name'=>'Pro',
                'price'=> 249,
                'interval'=>'month',
                'trial_period_days'=> 7,
                'allowed_responses'=> 3000,
                'lookup_key'=>'Pro',
                'st_plan_id'=>'price_1OqDfHIpkptxAK2aXlWoGZPg'
            ],
            [
                'name'=>'Scale',
                'price'=> 499,
                'interval'=>'month',
                'trial_period_days'=> 7,
                'allowed_responses'=> 36000,
                'lookup_key'=>'Scale',
                'st_plan_id'=>'price_1OqDh5IpkptxAK2aCjQM4UKF'
            ],
        ];

        foreach ($plans as $plan) {
            Plan::create($plan);
        }
    }
}
