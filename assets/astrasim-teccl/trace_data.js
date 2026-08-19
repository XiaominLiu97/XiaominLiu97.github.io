window.ET_DATA = {
 "all_reduce": {
  "dir": "examples/workload/microbenchmarks/all_reduce/4npus_1MB",
  "npus": 4,
  "files": [
   {
    "file": "all_reduce.0.et",
    "npu": 0,
    "metadata": {
     "version": "0.0.4"
    },
    "nodes": [
     {
      "id": 0,
      "name": "all_reduce_4npus_1MB",
      "type": "COMM_COLL_NODE",
      "start_us": 0,
      "duration_us": 0,
      "ctrl_deps": [],
      "data_deps": [],
      "attrs": {
       "is_cpu_op": false,
       "comm_type": 0,
       "comm_size": 1048576
      },
      "comm_type": "ALL_REDUCE"
     }
    ]
   },
   {
    "file": "all_reduce.1.et",
    "npu": 1,
    "metadata": {
     "version": "0.0.4"
    },
    "nodes": [
     {
      "id": 1,
      "name": "all_reduce_4npus_1MB",
      "type": "COMM_COLL_NODE",
      "start_us": 0,
      "duration_us": 0,
      "ctrl_deps": [],
      "data_deps": [],
      "attrs": {
       "is_cpu_op": false,
       "comm_type": 0,
       "comm_size": 1048576
      },
      "comm_type": "ALL_REDUCE"
     }
    ]
   },
   {
    "file": "all_reduce.2.et",
    "npu": 2,
    "metadata": {
     "version": "0.0.4"
    },
    "nodes": [
     {
      "id": 2,
      "name": "all_reduce_4npus_1MB",
      "type": "COMM_COLL_NODE",
      "start_us": 0,
      "duration_us": 0,
      "ctrl_deps": [],
      "data_deps": [],
      "attrs": {
       "is_cpu_op": false,
       "comm_type": 0,
       "comm_size": 1048576
      },
      "comm_type": "ALL_REDUCE"
     }
    ]
   },
   {
    "file": "all_reduce.3.et",
    "npu": 3,
    "metadata": {
     "version": "0.0.4"
    },
    "nodes": [
     {
      "id": 3,
      "name": "all_reduce_4npus_1MB",
      "type": "COMM_COLL_NODE",
      "start_us": 0,
      "duration_us": 0,
      "ctrl_deps": [],
      "data_deps": [],
      "attrs": {
       "is_cpu_op": false,
       "comm_type": 0,
       "comm_size": 1048576
      },
      "comm_type": "ALL_REDUCE"
     }
    ]
   }
  ]
 },
 "all_gather": {
  "dir": "examples/workload/microbenchmarks/all_gather/4npus_1MB",
  "npus": 4,
  "files": [
   {
    "file": "all_gather.0.et",
    "npu": 0,
    "metadata": {
     "version": "0.0.4"
    },
    "nodes": [
     {
      "id": 0,
      "name": "all_gather_4npus_1MB",
      "type": "COMM_COLL_NODE",
      "start_us": 0,
      "duration_us": 0,
      "ctrl_deps": [],
      "data_deps": [],
      "attrs": {
       "is_cpu_op": false,
       "comm_type": 2,
       "comm_size": 1048576
      },
      "comm_type": "ALL_GATHER"
     }
    ]
   },
   {
    "file": "all_gather.1.et",
    "npu": 1,
    "metadata": {
     "version": "0.0.4"
    },
    "nodes": [
     {
      "id": 1,
      "name": "all_gather_4npus_1MB",
      "type": "COMM_COLL_NODE",
      "start_us": 0,
      "duration_us": 0,
      "ctrl_deps": [],
      "data_deps": [],
      "attrs": {
       "is_cpu_op": false,
       "comm_type": 2,
       "comm_size": 1048576
      },
      "comm_type": "ALL_GATHER"
     }
    ]
   },
   {
    "file": "all_gather.2.et",
    "npu": 2,
    "metadata": {
     "version": "0.0.4"
    },
    "nodes": [
     {
      "id": 2,
      "name": "all_gather_4npus_1MB",
      "type": "COMM_COLL_NODE",
      "start_us": 0,
      "duration_us": 0,
      "ctrl_deps": [],
      "data_deps": [],
      "attrs": {
       "is_cpu_op": false,
       "comm_type": 2,
       "comm_size": 1048576
      },
      "comm_type": "ALL_GATHER"
     }
    ]
   },
   {
    "file": "all_gather.3.et",
    "npu": 3,
    "metadata": {
     "version": "0.0.4"
    },
    "nodes": [
     {
      "id": 3,
      "name": "all_gather_4npus_1MB",
      "type": "COMM_COLL_NODE",
      "start_us": 0,
      "duration_us": 0,
      "ctrl_deps": [],
      "data_deps": [],
      "attrs": {
       "is_cpu_op": false,
       "comm_type": 2,
       "comm_size": 1048576
      },
      "comm_type": "ALL_GATHER"
     }
    ]
   }
  ]
 },
 "reduce_scatter": {
  "dir": "examples/workload/microbenchmarks/reduce_scatter/4npus_1MB",
  "npus": 4,
  "files": [
   {
    "file": "reduce_scatter.0.et",
    "npu": 0,
    "metadata": {
     "version": "0.0.4"
    },
    "nodes": [
     {
      "id": 0,
      "name": "reduce_scatter_4npus_1MB",
      "type": "COMM_COLL_NODE",
      "start_us": 0,
      "duration_us": 0,
      "ctrl_deps": [],
      "data_deps": [],
      "attrs": {
       "is_cpu_op": false,
       "comm_type": 7,
       "comm_size": 1048576
      },
      "comm_type": "REDUCE_SCATTER"
     }
    ]
   },
   {
    "file": "reduce_scatter.1.et",
    "npu": 1,
    "metadata": {
     "version": "0.0.4"
    },
    "nodes": [
     {
      "id": 1,
      "name": "reduce_scatter_4npus_1MB",
      "type": "COMM_COLL_NODE",
      "start_us": 0,
      "duration_us": 0,
      "ctrl_deps": [],
      "data_deps": [],
      "attrs": {
       "is_cpu_op": false,
       "comm_type": 7,
       "comm_size": 1048576
      },
      "comm_type": "REDUCE_SCATTER"
     }
    ]
   },
   {
    "file": "reduce_scatter.2.et",
    "npu": 2,
    "metadata": {
     "version": "0.0.4"
    },
    "nodes": [
     {
      "id": 2,
      "name": "reduce_scatter_4npus_1MB",
      "type": "COMM_COLL_NODE",
      "start_us": 0,
      "duration_us": 0,
      "ctrl_deps": [],
      "data_deps": [],
      "attrs": {
       "is_cpu_op": false,
       "comm_type": 7,
       "comm_size": 1048576
      },
      "comm_type": "REDUCE_SCATTER"
     }
    ]
   },
   {
    "file": "reduce_scatter.3.et",
    "npu": 3,
    "metadata": {
     "version": "0.0.4"
    },
    "nodes": [
     {
      "id": 3,
      "name": "reduce_scatter_4npus_1MB",
      "type": "COMM_COLL_NODE",
      "start_us": 0,
      "duration_us": 0,
      "ctrl_deps": [],
      "data_deps": [],
      "attrs": {
       "is_cpu_op": false,
       "comm_type": 7,
       "comm_size": 1048576
      },
      "comm_type": "REDUCE_SCATTER"
     }
    ]
   }
  ]
 },
 "all_to_all": {
  "dir": "examples/workload/microbenchmarks/all_to_all/4npus_1MB",
  "npus": 4,
  "files": [
   {
    "file": "all_to_all.0.et",
    "npu": 0,
    "metadata": {
     "version": "0.0.4"
    },
    "nodes": [
     {
      "id": 0,
      "name": "all_to_all_4npus_1MB",
      "type": "COMM_COLL_NODE",
      "start_us": 0,
      "duration_us": 0,
      "ctrl_deps": [],
      "data_deps": [],
      "attrs": {
       "is_cpu_op": false,
       "comm_type": 6,
       "comm_size": 1048576
      },
      "comm_type": "ALL_TO_ALL"
     }
    ]
   },
   {
    "file": "all_to_all.1.et",
    "npu": 1,
    "metadata": {
     "version": "0.0.4"
    },
    "nodes": [
     {
      "id": 1,
      "name": "all_to_all_4npus_1MB",
      "type": "COMM_COLL_NODE",
      "start_us": 0,
      "duration_us": 0,
      "ctrl_deps": [],
      "data_deps": [],
      "attrs": {
       "is_cpu_op": false,
       "comm_type": 6,
       "comm_size": 1048576
      },
      "comm_type": "ALL_TO_ALL"
     }
    ]
   },
   {
    "file": "all_to_all.2.et",
    "npu": 2,
    "metadata": {
     "version": "0.0.4"
    },
    "nodes": [
     {
      "id": 2,
      "name": "all_to_all_4npus_1MB",
      "type": "COMM_COLL_NODE",
      "start_us": 0,
      "duration_us": 0,
      "ctrl_deps": [],
      "data_deps": [],
      "attrs": {
       "is_cpu_op": false,
       "comm_type": 6,
       "comm_size": 1048576
      },
      "comm_type": "ALL_TO_ALL"
     }
    ]
   },
   {
    "file": "all_to_all.3.et",
    "npu": 3,
    "metadata": {
     "version": "0.0.4"
    },
    "nodes": [
     {
      "id": 3,
      "name": "all_to_all_4npus_1MB",
      "type": "COMM_COLL_NODE",
      "start_us": 0,
      "duration_us": 0,
      "ctrl_deps": [],
      "data_deps": [],
      "attrs": {
       "is_cpu_op": false,
       "comm_type": 6,
       "comm_size": 1048576
      },
      "comm_type": "ALL_TO_ALL"
     }
    ]
   }
  ]
 }
};