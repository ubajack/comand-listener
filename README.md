# comand-listener

Base d'une application composée du [client](client/) et du [serveur](server/).

Commande pour générer un cookie d'une validité de 1j contenant la clé d'API :

```js
document.cookie = `api-key=[API_KEY]; Secure; SameSite=Lax; Path=/; Expires=${new Date(
  new Date().getTime() + 86400000
).toGMTString()}`;
```

> Remplacez [API_KEY] par la clé d'API enregistrée du côté serveur  
> Cette commande peut être exécutée dans la console du navigateur
