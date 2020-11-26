import { Server, Model, Factory, RestSerializer, Serializer, JSONAPISerializer, Collection, Response, belongsTo, hasMany } from 'miragejs'

const server = new Server({

    models: {
        recipe: Model.extend(),
        ingredient: Model.extend({
            recipe: hasMany()    
        }),
    },

    serializers: {
        application: RestSerializer
    },

    routes() {
        this.namespace = ''

        this.resource('recipe')
        this.resource('ingredient')
    },
    
})

server.db.loadData({
    ingredients: [
        { 
            id: 1, 
            name: 'fries',
            vegetarian: true,
            calories: 312
        },
        { 
            id: 2, 
            name: 'cheese',
            vegetarian: true,
            calories: 402
        },
        { 
            id: 3, 
            name: 'gravy',
            vegetarian: false,
            calories: 79
        },
    ],
    recipes: [
        { 
            id: 1, 
            name: 'poutine',
            ingredients: [1, 2, 3]

        },
    ]
})

export default server

