import { DefaultUrlSerializer, UrlTree } from '@angular/router';

/** Serializa las rutas con barra final (/desarrollo-web/), que es la URL canónica:
 * el hosting sirve cada ruta como carpeta y redirige (301) la variante sin barra. */
export class TrailingSlashUrlSerializer extends DefaultUrlSerializer {
  override serialize(tree: UrlTree): string {
    const url = super.serialize(tree);
    const match = url.match(/^([^?#]*)(.*)$/);
    const path = match?.[1] ?? url;
    const rest = match?.[2] ?? '';
    return path.endsWith('/') ? url : `${path}/${rest}`;
  }
}
