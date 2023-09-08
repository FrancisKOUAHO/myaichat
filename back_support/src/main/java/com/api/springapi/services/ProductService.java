package com.api.springapi.services;

import com.api.springapi.dto.ProductDTO;
import com.api.springapi.models.Product;
import com.api.springapi.repositories.ProductRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> findAll() {
        return productRepository.findAll();
    }

    public Optional<Product> findById(Long id) {
        return productRepository.findById(id);
    }

    public Product save(ProductDTO productDTO) {
        Product product = new Product();
        BeanUtils.copyProperties(productDTO, product, "id");

        return productRepository.save(product);
    }

    public Product update(Long id, ProductDTO productDTO) {
        Product product = productRepository.findById(id).orElseThrow(() -> new RuntimeException("Product not found"));
        BeanUtils.copyProperties(productDTO, product, "id");

        return productRepository.save(product);
    }

    public void deleteById(Long id) {
        productRepository.deleteById(id);
    }
}
