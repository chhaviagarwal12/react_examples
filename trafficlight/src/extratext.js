this.changeColorOfTrafficLights
        .then(()=>{
            return this.changeColorOfTrafficLights(30000,1,'yellow')
        })
        .then(()=>{
            return this.changeColorOfTrafficLights(5000,1,'red') //tf2 will be green
        })
        .then(()=>{
            return this.changeColorOfTrafficLights(30000,2,'yellow')
        })
        .then(()=>{
            return this.changeColorOfTrafficLights(5000,2,'red') //tf3 will be green
        })
        .then(()=>{
            return this.changeColorOfTrafficLights(30000,3,'yellow')
        })
        .then(()=>{
            return this.changeColorOfTrafficLights(5000,3,'red') //tf4 will be green
        })
        .then(()=>{
            return this.changeColorOfTrafficLights(30000,4,'yellow')
        })
        .then(()=>{
            return this.changeColorOfTrafficLights(5000,4,'red') //tf1 will be green
        })