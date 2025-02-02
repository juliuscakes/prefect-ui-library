import { useSubscriptionWithDependencies } from '@prefecthq/vue-compositions'
import { computed, Ref, ref } from 'vue'
import { useCan } from '@/compositions/useCan'
import { useWorkspaceApi } from '@/compositions/useWorkspaceApi'
import { WorkspaceArtifactsApi } from '@/services/WorkspaceArtifactsApi'
import { UseEntitySubscription } from '@/types/useEntitySubscription'

export type UseArtifact = UseEntitySubscription<WorkspaceArtifactsApi['getArtifact'], 'artifact'>

export function useArtifact(artifactId: string | Ref<string | null | undefined>): UseArtifact {
  const api = useWorkspaceApi()
  const can = useCan()
  const id = ref(artifactId)

  const parameters = computed<[string] | null>(() => {
    if (!can.read.artifact) {
      return null
    }

    if (!id.value) {
      return null
    }

    return [id.value]
  })

  const subscription = useSubscriptionWithDependencies(api.artifacts.getArtifact, parameters)
  const artifact = computed(() => subscription.response)

  return {
    subscription,
    artifact,
  }
}