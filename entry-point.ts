import {mitchBucket1, mitchBucket2, mitchBucket3} from "./s3-buckets";
import {mitchVpc1, mitchVpc2, mitchVpc3} from "./vpcs"; 

export function main() {
  return{
    "mitchBucket1Arn": mitchBucket1.arn,
    "mitchBucket2Arn": mitchBucket2.arn,
    "mitchBucket3Arn": mitchBucket3.arn,
    "mitchVpc1Arn": mitchVpc1.arn,
    "mitchVpc2Arn": mitchVpc2.arn,
    "mitchVpc3Arn": mitchVpc3.arn,
  }
}