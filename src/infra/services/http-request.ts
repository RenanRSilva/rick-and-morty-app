import { HttpMethod } from "./http-method";

export default class HttpRequest {
  url: string;
  method: HttpMethod;
  body: any;
  auth: boolean;
  notify: boolean;

  constructor({
    url = '',
    method = HttpMethod.get,
    body = null,
    auth = false,
    notify = false,
  }) {
    this.url = url;
    this.method = method;
    this.body = body;
    this.auth = auth;
    this.notify = notify;
  }

  static makeGet(url: string, { auth = false, notify = false }): HttpRequest {
    return new HttpRequest({ method: HttpMethod.get, url, auth, notify });
  }

  static makeDelete(url: string, { notify = true }): HttpRequest {
    return new HttpRequest({
      method: HttpMethod.delete,
      url,
      auth: true,
      notify,
    });
  }

  static makePost(
    url: string,
    body: any,
    { auth = false, notify = false },
  ): HttpRequest {
    return new HttpRequest({
      method: HttpMethod.post,
      url,
      body,
      auth,
      notify,
    });
  }

  static makeFormRequest(
    url: string,
    method: HttpMethod,
    body: any,
  ): HttpRequest {
    return new HttpRequest({ url, method, body, notify: true, auth: true });
  }
}
