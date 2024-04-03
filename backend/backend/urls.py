from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings
from django.urls import include, path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView, TokenVerifyView,
)
from accounts.views import UserViewSet
from restaraunts.views import (
    RestaurantViewSet, MenuViewSet, MenuListViewSet,
    TagViewSet, TagGroupViewSet, RestaurantTagsViewSet,
    NestedCategoryViewSet, DishItemViewSet, PhotoViewSet,
    PhotoListViewSet, CategoryViewSet, RestaurantTagListViewSet,
    DishListViewSet, RestaurantListViewSet
)
from rest_framework_nested import routers


router = routers.DefaultRouter()
router.register(r'users', UserViewSet, basename='users')
router.register(r'restaurant', RestaurantViewSet)
router.register(r'menu', MenuViewSet, basename='menu')
router.register(r'tag', TagViewSet, basename='tag')
router.register(r'tag-group', TagGroupViewSet, basename='tagGroup')
router.register(r'restaurant-tags', RestaurantTagsViewSet, basename='restaurantTags')
router.register(r'category', CategoryViewSet, basename='category')
router.register(r'dish-item', DishItemViewSet, basename='dishItem')
router.register(r'photo', PhotoViewSet, basename='photo')

restaurant_router = routers.NestedSimpleRouter(router, r'restaurant', lookup='restaurant')
restaurant_router.register(r'menu', MenuListViewSet, basename='menu')
restaurant_router.register(r'photo', PhotoListViewSet, basename='photo')
restaurant_router.register(r'tag', RestaurantTagListViewSet, basename='tag')

dishes_router = routers.NestedSimpleRouter(router, r'category', lookup='category')
dishes_router.register(r'dishes', DishListViewSet, basename='dishes')

restaurant_users_router = routers.NestedSimpleRouter(router, r'users', lookup='users')
restaurant_users_router.register(r'restaurant', RestaurantListViewSet, basename='restaurant')

urlpatterns = [
                  path(r'', include(router.urls)),
                  path(r'', include(restaurant_router.urls)),
                  path('admin/', admin.site.urls),
                  path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
                  path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
                  path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
                  path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
              ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
