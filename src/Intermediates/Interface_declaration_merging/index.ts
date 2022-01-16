// Express Base
export interface Request {
    body: any
}

// Express JSON
export interface Request {
    json: any
}

// Our App
const handleRequest = (req: Request) => {
    console.log(req.body, req.json)
}