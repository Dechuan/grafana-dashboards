import { apiRequestManagement } from '../../../../../../../../react-plugins-deps/helpers/api';

class IndexesService {
  static getMysqlIndex({ database, service_id, table_name }) {
    const body = {
      database,
      service_id,
      table_name,
    };
    return apiRequestManagement.post<any, any>('/Actions/StartMySQLShowIndex', body);
  }

  static getPostgreSQLIndex({ service_id, table_name }) {
    const body = {
      service_id,
      table_name,
    };
    return apiRequestManagement.post<any, any>('/Actions/StartPostgreSQLShowIndex', body);
  }
}

export default IndexesService;
