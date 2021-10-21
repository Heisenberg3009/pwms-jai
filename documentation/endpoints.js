module.exports = function (app) {
	
    app.get('/users/:id', (req, res) => {
        // #swagger.tags = ['User']
        // #swagger.description = 'Endpoint to display the users!'
      
        /* #swagger.responses[200] = { 
             schema: { $ref: "#/definitions/User" },
             description: 'Displaying all users!' 
        } */

        return res.status(200).send(data)
     })

    app.post('/users', (req, res) => {
        // #swagger.tags = ['User']
        // #swagger.description = 'Endpoint to create/put new users!'
        // #swagger.parameters['id'] = { description: 'Enter User ID!' }

        /* #swagger.parameters['Name'] = {
               description: 'Enter your name'
        }
        #swagger.parameters['Age'] = {
               description: 'Enter your age'
        }
        #swagger.parameters['City'] =  {
             description: 'Enter your city'
        }
        #swagger.parameters['Phone number'] =  {
             description: 'Enter your occupation'
        }
        #swagger.parameters['Email'] =  {
             description: 'Enter your occupation'
        }
     */

        const newUser = req.body
        if (true) {
            /* #swagger.responses[201] = { 
                schema: { $ref: "#/definitions/User" },
                description: 'User created succesfully!' }*/
            return res.status(201).send(data)
        }
    })

    app.put('/users/:id', (req, res) => {
        // #swagger.tags = ['User']
        // #swagger.description = 'Endpoint for the user to update!'
        // #swagger.parameters['id'] = { description: 'Enter User ID!' }
        
        /* #swagger.parameters['Name'] = {
            description: 'Enter name if to be updated -',
            type: 'string'
     } */

        /* #swagger.parameters['Age'] = {
            description: 'Enter age if to be updated-',
            type: 'string'
     } */

        /* #swagger.parameters['City'] = {
            description: 'Enter city if to be updated -',
            type: 'string'
     } */

       /* #swagger.parameters['Phone number'] = {
            description: 'Enter phone number if to be updated -',
            type: 'string'
     } */
        
        /* #swagger.parameters['Occupation'] = {
            description: 'Enter occupation if to be updated -',
            type: 'string'
     } */
    
        /* #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/User" },
               description: 'User updated successfully!' 
        } */
     })

    
    app.get('/warehouse/:id', (req, res) => {
        // #swagger.tags = ['Warehouse']
        // #swagger.description = 'Endpoint to get all warehouse spaces!'
        // #swagger.parameters['Warehouse ID'] = { description: 'Enter the Warehouse ID' }
      
        /* #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/User" },
               description: 'Displaying all warehouse spaces!:' 
        } */
     })

     app.post('/warehouse', (req, res) => {
        // #swagger.tags = ['Warehouse']
        // #swagger.description = 'Endpoint to create/put new warehouse space!'

        /* #swagger.parameters['Name'] = {
               description: 'Enter your name'
        }
        #swagger.parameters['Warehouse Name'] = {
               description: 'Enter warehouse name'
        }
        }
     */
        const newUser = req.body
        if (true) {
            /* #swagger.responses[201] = { 
                schema: { $ref: "#/definitions/User" },
                description: 'Device created succesfully!' }*/
            return res.status(201).send(data)
        }
    })

    app.put('/warehouse/:id', (req, res) => {
        // #swagger.tags = ['Warehouse']
        // #swagger.description = 'Endpoint for the user to update warehouse space!'
        
        /* #swagger.parameters['Name'] = {
            description: 'Enter location co-ordinates if to be updated-',
            type: 'string'
     } */
     })

    app.get('/vehicle/:id', (req, res) => {
        // #swagger.tags = ['Vehicle']
        // #swagger.description = 'Endpoint to display all vehicles!'
        // #swagger.parameters['VehicleID'] = { description: 'Enter the vehicle ID!' }

        /* #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Vehicle" },
               description: 'Displaying all vehicles!' 
        } */
     })

    app.post('/vehicle', (req, res) => {
        // #swagger.tags = ['Vehicle']
        // #swagger.description = 'Endpoint to create/put new vehicles!'

        /* #swagger.parameters['Name'] = {
               description: 'Enter your name!'
        }
        #swagger.parameters['Vehicle Name'] = {
               description: 'Enter your vehicle name!'
        }
        #swagger.parameters['Vehicle Type'] =  {
             description: 'Enter your vehicle type!'
        }
        #swagger.parameters['Registration Number'] =  {
             description: 'Enter your registration number!'
        }
     */
        const newUser = req.body
        if (true) {
            /* #swagger.responses[201] = { 
                schema: { $ref: "#/definitions/Vehicle" },
                description: 'Vehicle created succesfully!' }*/
            return res.status(201).send(data)
        }
    })

    app.put('/vehicle/:id', (req, res) => {
        // #swagger.tags = ['Vehicle']
        // #swagger.description = 'Endpoint for the user to update their vehicle information!'
        // #swagger.parameters['id'] = { description: 'Enter Vehicle ID!' }
        
        /* #swagger.parameters['Vehicle Name'] = {
            description: 'Enter Vehicle Name if to be updated -',
            type: 'string'
     } */

        /* #swagger.parameters['Vehicle Type'] = {
            description: 'Enter vehicle type if to be updated -',
            type: 'string'
     } */

        /* #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Vehicle" },
               description: 'Vehicle updated successfully!' 
        } */
     })
}