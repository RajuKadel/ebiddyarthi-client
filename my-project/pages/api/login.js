// const cookie = require('cookie')
const { serialize } = require('cookie');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//firebase-admin
const admin = require("firebase-admin");
// const credentials = require("./key.json");
admin.initializeApp({
    credential: admin.credential.cert({
        "type": "service_account",
        "project_id": "ebiddyarthi",
        "private_key_id": "9611eb7ed80dfb8f17b89cf788a96cb11da942cf",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDIQE0ylO91S9Uj\nzhBk31aVLirWO4QfOR5KJWVyViunnBjuc2aRNmB7X9kDiwox5zBWzpi3Sq473um3\nkK6DoGqLaoE3lT6EwORdSCPqJM+/0zS520Rk66YYaIXFNL6UJL3jCeHUUCf8abUH\n7OB6ttc0GLZha90t2NtcMLoeKnuTWk5hl39+aTaE2eTEnQNXheBrSnOWdFLYIPIf\nV6UBHoB4HVLZvMiwoIa4r1SBP5kcLrNbV7E/8PThcFNfs71xIDapE/TkpQJmaZJ3\nAe9KIXC80nRg7rVt4Z7tgwMXvkeQfeXcGKAeiSCgIsB+RYFEl5pQ8QQEwfvHqOfQ\nlp8gWvx/AgMBAAECggEADpkNZ54O1Lyp9Xm8nTXgwHBEpChjickmqZ4PRqX8ebP5\n50wXUoelweirT8RPgnLJhdJ6tIXnrKqj3ANajXLgwXgKomwpShErtJchMxzq3h99\n7PyMgFTjX00jT0x4hiEljIr4YPtU5uQn08OTW66/gmc4yGJOFd0EpLRSpQdQyd1+\nubJL3wXL2t0IB5EaPAAAGkeMwP0wCJtsdhJQVyAz9zF0YfwPepzdP/7jiDbXFQ6P\nhVBZBQ/1yKhrxBvOp+opNnFXisXEDqhGUwR0OSe2QTt2D3foUWUjtR0Oh/IPM8qG\nFt0VNNeCufl0ZPyQ4K+6C2Nh4i0Pwh/qZ1od4UrOGQKBgQD85oVcvdUTlnuDRlZE\nuKMd857QFzv/LQFJux/Cwkc8tTHUpqFkZMkRhtX3dcYm0bVyDN6e7VWWzds4ufFi\n1ltVQgrATDr6tF0YfkkLr8KMqlqIOBO+MVbiDAsKq1PMUbR6n+tTNa4ANQic0N8j\n3zFtYVijaj2RUgO65cW5qEnV1wKBgQDKtJe34z0mB8z1TQZtU9P92dRBAay2D4Q7\ndFUebJKr720VQfP0neoqiD8lT7ibULxCJNFqIC9Zb2N2TV4cI9I+NI5xs85gTTYx\nZwmufrKfHKNPbb1s5FE8c6/FW3p37lgly6rDynZACLYTyu1THwKhQwDhH3afEc7V\n/SQMDgNpmQKBgDXO9mEdItDgG7d6p7BHeK1OwGOWDfXlJXkCj2do3q9T/h44te4e\nY4mPHsdgD6ECzZBOnK9D4AoOEq6nIWzeHuCtBIyVq5bb+VLUy8Xox4QWWtzQ0aKN\n7OZ7mX3Tpii62aOdkvxJV5RDtGlpJ5ECVAnpxGpAmIjq4lBJwyAVZmBRAoGAXd9Q\nO5qCoPAP3LG0/kBJ9k9AWnJ6Fz4MULRJDvPc4L7aV3PZlDjlTpkWFSNcLKEw7bi7\nOlh5VQOenhSqNoHoRWJ1bPaF5lcbd7lt5F9MPR84CfqaNKlvbX1tswnwJ0Y7kBVH\nmbBTHshp+bSKP2om/6NV7utxNa07iiHW5bY/olECgYEA6B2QHp1iY1+izHC7IMEs\nUX1Lkt2E1Grs5s0eULQbMB4/nKO/RjGNXoWPIHxoJNs6u6ejyuUOPZIjdngZBFEB\npYV89kxNNIVRLmAocfTOStlEFrSnOC7eMX7tDjhRjnyF45iVso0acj9nZlvayXog\nQ0F9QJgeb9qD0GpiJSe71jE=\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-ylsaq@ebiddyarthi.iam.gserviceaccount.com",
        "client_id": "105552517212288670431",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ylsaq%40ebiddyarthi.iam.gserviceaccount.com"
    })
});
const db = admin.firestore();
//api route
export default function handler(req, res) {

    const { email, password } = req.body;
    try {
        const response = await db.collection('users').doc(email).get();
        if (!response.data()) {
            return res.status(200).json({ message: "User doesn't exists." });
        }
        const { isVerified, password: databasePassword, id } = response.data();
        const ispassword_true = await bcrypt.compare(
            password, databasePassword
        );

        if (!ispassword_true) {
            return res.status(200).json({ message: "Invalid Credentials" });
        }
        if (!isVerified) {
            return res.status(200).json({ message: "User is not verified." });
        }

        if (!ispassword_true) {
            return res.status(200).json({ message: "Invalid Credentials" });
        }
        const token = jwt.sign(
            { id, email },
            "JsonWebSecretIsAwesomeSecret",
            { expiresIn: '1h' }
        );
        console.log(token);
        const serialized = serialize('userToken', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV != 'development',
            sameSite: 'strict',
            path: '/',
            maxAge: 1000 * 60 * 60
        })
        console.log(serialized);
        console.log('hello world')
        res.setHeader('Set-Cookie', serialized);
        // res.setHeader('Set-Cookie', cookie.serialize('foo', 'bar', { httpOnly: true }))

        const data = { result: response.data(), token, message: "success" }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);

    }





}
