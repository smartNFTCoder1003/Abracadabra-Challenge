

<template>
    <main class="borrow mt-5">
        <div class="container">
            <div class="row">
                <div class="col-md-5 col-sm-12 mt-4">
                    <div class="panel">
                        <div class="chose-chain d-flex justify-content-between align-items-center mb-4">
                            <small>Choose Chain</small>
                            <button class="btn btn-chain" @click="showNewworksModal">
                                <img src="https://abracadabra.money/img/binance-icon.a873ddca.svg" alt="Not found" width="30" /> BSC
                                <i class="fa fa-angle-down" aria-hidden="true" style="font-size: 20px;"></i>
                            </button>
                        </div>
                        <SpaceLine />
                        <div class="mt-4 mb-4 ">
                            <small>Collateral assets</small>
                            <div class="form-panel">
                                <input type="number" placeholder="0.0"/>
                                <button class="btn btn-coin" @click="showAssetsModal">
                                    <div class="d-flex align-items-center gap-2">
                                        <img src="https://abracadabra.money/img/base_select_icon.2132cf1f.png" alt="Not found" width="30"/>Select to <i class="fa fa-angle-down" aria-hidden="true" style="font-size: 20px;"></i>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <SpaceLine />
                        <div class="mt-4 mb-4">
                            <small>MIM to Borrow</small>
                            <div class="form-panel">
                                <input type="number" placeholder="0.0"/>
                                <button class="btn btn-coin" disabled>
                                    <div class="d-flex align-items-center gap-2">
                                        <img src="https://abracadabra.money/img/MIM.90d60c9b.png" alt="Not found" width="30"/> MIM
                                    </div>
                                </button>
                            </div>
                        </div>
                        <SpaceLine />
                        <div class="d-flex justify-content-center py-3">
                            <router-link to="/" class="text-purple">Go to Positions</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-7 col-12 mt-4">
                    <div class="panel">
                        <div class="mb-4">BORROW MIM</div>
                        <SpaceLine />
                        <div class="learn-borrow mt-4">
                            <img src="../assets/lending.png" alt="" width="125" />
                            <small class="mt-3">Choose the asset and amount you want to use as collateral as well as the amount of MIM you want to Borrow 
                                <br/><br/> you want to learn more read our docs <router-link to="/" class="text-purple">here</router-link> </small>
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
    name: 'BorrowPage',
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
