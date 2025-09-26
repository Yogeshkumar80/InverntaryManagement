export async function makeApiRequest(){
    try {
        const baseUrl = "http://localhost:3000";
        const response = await fetch(`${baseUrl}/api/supplier`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        if (response.ok) {
            console.log(response)
            reset()
            setLoading(false)
            toast.success("Warehouse created successfully")
        }
    }
    catch (error) {
        console.log(error)
        setLoading(false)
    } 
}