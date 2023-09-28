export {getDefaultCredentials, setDefaultCredentials} from './config';
export {default as CartoLayer} from './layers/carto-layer';
export {default as CartoVectorLayer} from './layers/carto-vector-layer';
export {default as H3TileLayer} from './layers/h3-tile-layer';
export {default as _PointLabelLayer} from './layers/point-label-layer';
export {default as QuadbinTileLayer} from './layers/quadbin-tile-layer';
export {default as RasterTileLayer} from './layers/raster-tile-layer';
export {default as BASEMAP} from './basemap';
export {default as colorBins} from './style/color-bins-style';
export {default as colorCategories} from './style/color-categories-style';
export {default as colorContinuous} from './style/color-continuous-style';
export {
  FORMATS,
  TILE_FORMATS,
  MAP_TYPES,
  API_VERSIONS,
  CartoAPIError,
  fetchLayerData,
  fetchMap,
  getDataV2 as _getDataV2,
  mapInstantiation as _mapInstantiation
} from './api';
export type {APIErrorContext, QueryParameters} from './api';
export type {CartoLayerProps} from './layers/carto-layer';

export {
  CartoH3QuerySource,
  CartoH3TableSource,
  CartoH3TilesetSource,
  CartoRasterSource,
  CartoQuadbinQuerySource,
  CartoQuadbinTableSource,
  CartoQuadbinTilesetSource,
  CartoVectorQuerySource,
  CartoVectorTableSource,
  CartoVectorTilesetSource,
  SOURCE_DEFAULTS
} from './sources';
export type {
  CartoTilejsonResult,
  CartoH3QuerySourceOptions,
  CartoH3TableSourceOptions,
  CartoH3TilesetSourceOptions,
  CartoRasterSourceOptions,
  CartoQuadbinQuerySourceOptions,
  CartoQuadbinTableSourceOptions,
  CartoQuadbinTilesetSourceOptions,
  CartoVectorQuerySourceOptions,
  CartoVectorTableSourceOptions,
  CartoVectorTilesetSourceOptions
} from './sources';
