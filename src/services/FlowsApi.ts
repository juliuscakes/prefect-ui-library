import { InjectionKey } from 'vue'
import { Flow } from '@/models/Flow'
import { IFlowResponse } from '@/models/IFlowResponse'
import { Api, ApiRoute } from '@/services/Api'
import { mapper } from '@/services/Mapper'
import { UnionFilters } from '@/types/UnionFilters'

export class FlowsApi extends Api {

  protected route: ApiRoute = '/flows'

  public getFlow(id: string): Promise<Flow> {
    return this.get<IFlowResponse>(`/${id}`)
      .then(({ data }) => mapper.map('IFlowResponse', data, 'Flow'))
  }

  public getFlows(filter: UnionFilters): Promise<Flow[]> {
    return this.post<IFlowResponse[]>('/filter', filter)
      .then(({ data }) => mapper.map('IFlowResponse', data, 'Flow'))
  }

  public getFlowsCount(filter: UnionFilters): Promise<number> {
    return this.post<number>('/count', filter).then(({ data }) => data)
  }

  public deleteFlow(flowId: string): Promise<void> {
    return this.delete(`/${flowId}`)
  }
}

export const flowsApiKey: InjectionKey<FlowsApi> = Symbol('flowsApiKey')