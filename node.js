const http = require('http')
const fs = require('fs')
const url = require('url')

const server = http.createServer((req, res) => {
    const u = url.parse(req.url, true)
    let fileLocation
    let contentType
    if(u.pathname === "/" || u.pathname === "/home"){
        fileLocation = "index.html"
        contentType = "text/html"
    }
    else if(u.pathname === "/mahasiswa"){
        fileLocation = "mahasiswa.html"
        contentType = "text/html"
    }
    else if(u.pathname === "/mahasiswa/insert"){
        fileLocation = "mahasiswaInsert.html"
        contentType = "text/html"
    }
    else if(u.pathname === "/dosen"){
        fileLocation = "dosen.html"
        contentType = "text/html"
    }
    else if(u.pathname === "/dosen/insert"){
        fileLocation = "dosenInsert.html"
        contentType = "text/html"
    }
    else if(u.pathname === "/style.css"){
        fileLocation = "style.css"
        contentType = "text/css"
    }

    if (!fileLocation) {
        res.writeHead(404, {"Content-Type": "text/html"})
        res.end("404 Not Found")
        return
    }

    fs.readFile(fileLocation, (err,data) => {
        if(err){
            res.writeHead(404, {"Content-type": "text/html"})
            return res.end()
        }

        res.writeHead(200, {"Content-type": contentType})
        res.write(data)
        return res.end()
    })
})

server.listen(8000, () =>{
    console.log("jalan cuyyy")
})