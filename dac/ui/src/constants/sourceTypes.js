/*
 * Copyright (C) 2017-2019 Dremio Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Note: These IDs need to match values in source.proto
export const REDSHIFT = 'REDSHIFT';
export const S3 = 'S3';
export const ELASTIC = 'ELASTIC';
export const HBASE = 'HBASE';
export const HDFS = 'HDFS';
export const HIVE = 'HIVE';
export const HIVE3 = 'HIVE3';
export const MAPRFS = 'MAPRFS';
export const SQLSERVER = 'MSSQL';
export const MONGODB = 'MONGO';
export const MYSQL = 'MYSQL';
export const NAS = 'NAS';
export const ORACLE = 'ORACLE';
export const POSTGRESQL = 'POSTGRES';
export const ADL = 'ADL';
export const AWSGLUE = 'AWSGLUE';
export const GCS = 'GCS';
export const AMAZONELASTIC = 'AMAZONELASTIC';
export const AZURE_STORAGE = 'AZURE_STORAGE';

// These are not implemented in the backend yet.
export const CASSANDRA = 'CASSANDRA';
export const SALESFORCE = 'SALESFORCE';
export const NETEZZA = 'NETEZZA';
export const TERADATA = 'TERADATA';

export const sourceProperties = [
  // todo: loc
  {label: 'Amazon Redshift', sourceType: REDSHIFT, beta: true},
  {label: 'Amazon S3', sourceType: S3, beta: true},
  {label: 'Elasticsearch', sourceType: ELASTIC},
  {label: 'HBase', sourceType: HBASE, beta: true},
  {label: 'HDFS', sourceType: HDFS},
  {label: 'Hive 2.x', sourceType: HIVE},
  {label: 'Hive 3.x', sourceType: HIVE3},
  {label: 'MapR-FS', sourceType: MAPRFS},
  {label: 'Microsoft SQL Server', sourceType: SQLSERVER},
  {label: 'MongoDB', sourceType: MONGODB, beta: true},
  {label: 'MySQL', sourceType: MYSQL},
  {label: 'NAS', sourceType: NAS},
  {label: 'Oracle', sourceType: ORACLE},
  {label: 'PostgreSQL', sourceType: POSTGRESQL},
  {label: 'Azure Data Lake Store', sourceType: ADL, beta: true},
  {label: 'AWS Glue Catalog', sourceType: AWSGLUE, beta: true},
  {label: 'Google Cloud Storage', sourceType: GCS, beta: true}
];

export const externalSourceType = {
  [AMAZONELASTIC]: true,
  [REDSHIFT]: true,
  [ELASTIC]: true,
  [MONGODB]: true,
  [MYSQL]: true,
  [SQLSERVER]: true,
  [ORACLE]: true,
  [POSTGRESQL]: true
};

export const dataLakeSoureType = {
  [S3]: true,
  [ADL]: true,
  [AZURE_STORAGE]: true,
  [HDFS]: true,
  [MAPRFS]: true,
  [NAS]: true,
  [HIVE]: true,
  [HIVE3]: true,
  [AWSGLUE]: true,
  [GCS]: true
};

export const isExternalSourceType = (sourceType) => {
  return !dataLakeSoureType[sourceType];
};

export const isDatalakeTableSourceType = (sourceType) => {
  return dataLakeTableType[sourceType];
};

export const dataLakeTableType = {
  [HIVE]: true,
  [HIVE3]: true,
  [AWSGLUE]: true
};

export const SHARING_TAB_JSON_TEMPLATE = {};

export const USE_LEGACY_DIALECT_PROPERTY_NAME = 'useLegacyDialect';
