from fastapi import FastAPI


app = FastAPI(title="Docker FastAPI app")



@app.get("/api/health")
def health():
    return {"success":True,"Health":"100%","message":"Health check successfull"}

@app.get("/api/ping")
def ping():
    return {"success":True,"ping":"pong"}
