export const authenticationSchema = {
    "type": "object",
    "properties": {
        "token": {
            "type": "string"
        }
    },
    "additionalProperties": false,
    "required": ["token"]
}
