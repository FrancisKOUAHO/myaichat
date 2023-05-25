<?php

return [
    // Autres configurations existantes...

    'defaults' => [
        'routes' => [
            // Autres configurations existantes...
        ],

        'paths' => [
            // Autres configurations existantes...
        ],

        'scanOptions' => [
            // Autres configurations existantes...

            'open_api_spec_version' => env('L5_SWAGGER_OPEN_API_SPEC_VERSION', \L5Swagger\Generator::OPEN_API_DEFAULT_SPEC_VERSION),
        ],

        // Autres configurations existantes...
    ],

    'documentations' => [
        'default' => [
            'api' => [
                'title' => 'L5 Swagger UI',
            ],

            'routes' => [
                // Configurations de routes
            ],

            'paths' => [
                // Configurations de chemins
            ],
        ],
    ],

    // Autres configurations existantes...

    // Configurations supplémentaires que vous avez fournies
    'open_api_spec_version' => env('L5_SWAGGER_OPEN_API_SPEC_VERSION', \L5Swagger\Generator::OPEN_API_DEFAULT_SPEC_VERSION),

    // Autres configurations existantes...
];
