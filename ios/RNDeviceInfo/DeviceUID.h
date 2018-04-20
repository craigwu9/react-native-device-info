#import <Foundation/Foundation.h>

@interface DeviceUID : NSObject
+ (DeviceUID *)shareInstanc;
- (NSString *)uid;
- (NSString *)uidType;
@end
