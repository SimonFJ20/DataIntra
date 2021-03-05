# Devtest API
### Api til test af frontend under udvikling


## User Auth

### Login `/auth/login` : POST
#### Request
```typescript
{
    username: string,               // Username of existing user
    password: string                // Password of existing user
}
```
#### Response
```typescript
{
    err: boolean,                   // If an error occured
    msg?: string | object,          // Error message, if any
    token?: number                  // Random token generated if successful
}
```

## (not finished) Register `/auth/register` : POST

### Request
```typescript
{
    username: string,               // Username of new user
    password: string                // Password of new user
}
```

#### Response
```typescript
{
    err: boolean,                   // If an error occured
    msg?: string | object,          // Error message, if any
}
```


