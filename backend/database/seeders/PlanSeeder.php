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
                'name'=>'Lite',
                'price'=> 15,
                'interval'=>'month',
                'trial_period_days'=> 15,
                'lookup_key'=>'Lite',
                'st_plan_id'=>'price_1NhYlyFdQvV9SdYX19x5YRWy'
            ],
            [
                'name'=>'Starter',
                'price'=> 39,
                'interval'=>'month',
                'trial_period_days'=> 15,
                'lookup_key'=>'Starter',
                'st_plan_id'=>'price_1NVXvfFdQvV9SdYXSGsPeiep'
            ],
            [
                'name'=>'Growth',
                'price'=> 79,
                'interval'=>'month',
                'trial_period_days'=> 15,
                'lookup_key'=>'Growth',
                'st_plan_id'=>'price_1NVXvPFdQvV9SdYXYO49ndDl'
            ],
            [
                'name'=>'Pro',
                'price'=> 99,
                'interval'=>'month',
                'trial_period_days'=> 15,
                'lookup_key'=>'Pro',
                'st_plan_id'=>'price_1NVXvbFdQvV9SdYXXxdHArtW'
            ],
            [
                'name'=>'Lite',
                'price'=> 132,
                'interval'=>'year',
                'trial_period_days'=> 15,
                'lookup_key'=>'Lite',
                'st_plan_id'=>'price_1NhYlpFdQvV9SdYXEkqej8ai'
            ],
            [
                'name'=>'Starter',
                'price'=> 348,
                'interval'=>'year',
                'trial_period_days'=> 15,
                'lookup_key'=>'Starter',
                'st_plan_id'=>'price_1NVXvIFdQvV9SdYXoDRFqLRC'
            ],
            [
                'name'=>'Growth',
                'price'=> 708,
                'interval'=>'year',
                'trial_period_days'=> 15,
                'lookup_key'=>'Growth',
                'st_plan_id'=>'price_1NVXv7FdQvV9SdYXzRKXk2yn'
            ],
            [
                'name'=>'Pro',
                'price'=> 828,
                'interval'=>'year',
                'trial_period_days'=> 15,
                'lookup_key'=>'Pro',
                'st_plan_id'=>'price_1NVXvDFdQvV9SdYXufunLNJs'
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
                'name'=>'Lite',
                'price'=> 15,
                'interval'=>'month',
                'trial_period_days'=> 15,
                'lookup_key'=>'Lite',
                'st_plan_id'=>'price_1NgqMlFdQvV9SdYXyE2UuLzz'
            ],
            [
                'name'=>'Starter',
                'price'=> 39,
                'interval'=>'month',
                'trial_period_days'=> 15,
                'lookup_key'=>'Starter',
                'st_plan_id'=>'price_1NQWl9FdQvV9SdYXccsEVLV9'
            ],
            [
                'name'=>'Growth',
                'price'=> 79,
                'interval'=>'month',
                'trial_period_days'=> 15,
                'lookup_key'=>'Growth',
                'st_plan_id'=>'price_1NQWnDFdQvV9SdYXPhX9GnCW'
            ],
            [
                'name'=>'Pro',
                'price'=> 99,
                'interval'=>'month',
                'trial_period_days'=> 15,
                'lookup_key'=>'Pro',
                'st_plan_id'=>'price_1NQWmVFdQvV9SdYXhF7oPphl'
            ],
            [
                'name'=>'Lite',
                'price'=> 132,
                'interval'=>'year',
                'trial_period_days'=> 15,
                'lookup_key'=>'Lite',
                'st_plan_id'=>'price_1NgqOwFdQvV9SdYX5PLQyBR8'
            ],
            [
                'name'=>'Starter',
                'price'=> 348,
                'interval'=>'year',
                'trial_period_days'=> 15,
                'lookup_key'=>'Starter',
                'st_plan_id'=>'price_1NQzfQFdQvV9SdYXpDBY8Wtl'
            ],
            [
                'name'=>'Growth',
                'price'=> 708,
                'interval'=>'year',
                'trial_period_days'=> 15,
                'lookup_key'=>'Growth',
                'st_plan_id'=>'price_1NQzkaFdQvV9SdYXYlbRbGyK'
            ],
            [
                'name'=>'Pro',
                'price'=> 828,
                'interval'=>'year',
                'trial_period_days'=> 15,
                'lookup_key'=>'Pro',
                'st_plan_id'=>'price_1NQzjVFdQvV9SdYXU9CMdM79'
            ],
        ];

        foreach ($plans as $plan) {
            Plan::create($plan);
        }
    }
}
