Consuming APIs (third party = THEY)
1) THEY decide on Endpoints
2) THEY decide how data will be sent - JSON vs XML
3) THEY decide how much data to send
4) THEY decide what the data will look like (data structure)

Building (Serving) APIs - US!!!
1) WE decide on Endpoints
2) WE decide how data will be sent - JSON vs XML
3) WE decide how much data to send
4) WE decide what the data will look like (data structure)

API needs to be CRUD functional
CREATE  --POST
READ    --GET
UPDATE  --PUT
DELETE  --DELETE




Our constrants:
1) Whatever you send back, it MUST be JSON
2) Only allowed 2 endpoints
    -> /api/bucket
    -> /api/bucket/<id>


To accomplish this, we will use (RCUD since it's simpler) 
READ:
1) [GET "/api/bucket"] WE decide on Endpoints
2) [Return using JSON] WE decide how data will be sent
3) [Return everything] WE decide how much data to send
4) [Array of JSON objects] WE decide what the data will look like (data structure)
[{
    id: 1,
    description: "Learn postresSQL!!",
    isComplete: false,
}]

CREATE:
1) [POST "/api/bucket"]
2) JSON
3) Return a "receipt" from the Db saying an operation was done. Only returning 1 thing
4) Only returning 1 object (the created object)
{
   id: 1,
   description: "Learn postresSQL!!",
   isComplete: false,
}

UPDATE: 
1) [PUT "api/bucket/<id>"]
2) JSON
3) Return a receipt from the Db
4) Return 1 object


DELETE:
will be the exact same as update with some minor differences. The receipt may include a 
message specifying that this will be deleted not updated
1) [DELETE "api/bucket/<id>"]
2) JSON
3) Return a "receipt" from the Db
4) Return 1 object
