package main

import (
    "encoding/json"
    "log"
    "net/http"
)

type Response struct {
    Message string `json:"message"`
}

func rootHandler(w http.ResponseWriter, r *http.Request) {
    response := Response{
        Message: "Welcome to go-lang service!",
    }
    
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(response)
}

func main() {
    http.HandleFunc("/api", rootHandler)
    
    log.Println("Server starting on http://localhost:4004")
    if err := http.ListenAndServe(":4004", nil); err != nil {
        log.Fatal(err)
    }
}
