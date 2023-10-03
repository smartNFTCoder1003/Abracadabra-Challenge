
<template>
    <main class="borrow mt-5">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-md-7 col-12">
                    <div class="panel">
                        <div class="mb-4">INDIVIDUAL POSITIONS</div>
                        <SpaceLine />
                        <div class="learn-borrow mt-4">
                            <img src="../assets/helplessness.png" alt="" width="125" />
                            <small class="mt-3 text-gray">No open positions</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <AssetsModal
            v-show="isAssetsModalVisible"
            @close="closeAssetsModal"
        />
        <NetworksModal
            v-show="isNetworksModalVisible"
            @close="closeNewworksModal"
        />
    </main>
</template>

<script>
import '../scss/borrow.scss'
import SpaceLine from '../components/SpaceLine.vue'
import AssetsModal from '../components/AssetsModal.vue'
import NetworksModal from '../components/NewworksModal.vue'

export default {
    name: 'PositionsPage',
    components: {
        SpaceLine,
        AssetsModal,
        NetworksModal
    },
    data() {
      return {
        isAssetsModalVisible: false,
        isNetworksModalVisible: false,
      };
    },
    methods: {
      showAssetsModal() {
        this.isAssetsModalVisible = true;
      },
      showNewworksModal() {
        this.isNetworksModalVisible = true;
      },
      closeAssetsModal() {
        this.isAssetsModalVisible = false;
      },
      closeNewworksModal() {
        this.isNetworksModalVisible = false;
      }
    }
}
</script>
